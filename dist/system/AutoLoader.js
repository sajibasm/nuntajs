"use strict";
//import {IRouterMatcher} from "express-serve-static-core";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoLoader = void 0;
const path = require('path');
const fs = require('fs');
const DEFAULT_EXCLUDE_DIR = /^\./;
const DEFAULT_FILTER = /(.+Controller)\.js$/;
const DEFAULT_RECURSIVE = true;
class AutoLoader {
    constructor() {
        this.modules = [];
        this.controllers = [];
        this.dirname = path.dirname(require.main.filename) + '/controllers';
        this.excludeDirs = DEFAULT_EXCLUDE_DIR;
        this.filter = DEFAULT_FILTER;
        this.recursive = DEFAULT_RECURSIVE;
        this.controllers = this.execute();
    }
    excludeDirectory(dirname) {
        return !this.recursive ||
            (this.excludeDirs && dirname.match(this.excludeDirs));
    }
    filterFile(filename) {
        if (typeof this.filter === 'function') {
            return this.filter(filename);
        }
        let match = filename.match(this.filter);
        if (!match)
            return;
        return match[1] || match[0];
    }
    readFiles(dir) {
        const files = fs.readdirSync(dir);
        return files.map(file => {
            let filepath = dir + '/' + file;
            if (fs.statSync(`${dir}/${file}`).isDirectory()) {
                if (this.excludeDirectory(file))
                    return;
                return this.readFiles(`${dir}/${file}`);
            }
            else {
                let name = this.filterFile(file);
                if (!name)
                    return;
                if (name) {
                    this.modules.push({ ctrl: name, path: filepath });
                }
            }
        });
    }
    execute() {
        let requireList = [];
        let controllers = [];
        this.readFiles(this.dirname);
        this.modules.forEach(function (object, index) {
            requireList[index] = require(object.path);
            let controller = new requireList[index][object.ctrl];
            const ctrlName = object.ctrl.replace("Controller", "").toLowerCase();
            let ctrlPath = '';
            if (controller.path === '/') {
                controller.path = `/${ctrlName}/`;
                ctrlPath = `/${ctrlName}/`;
            }
            const rules = controller.access();
            rules.forEach(function (rule) {
                let task;
                let action;
                let type;
                let roles;
                for (let [key, value] of Object.entries(rule)) {
                    //need to apply validation for each key
                    switch (key.toLowerCase()) {
                        case 'action':
                            if (typeof value === "string") {
                                const index = value.indexOf('|');
                                if (index >= 0) {
                                    action = `${ctrlPath}` + value.substring(0, index).toLowerCase();
                                    task = value.substring(index + 1, value.length).toLowerCase();
                                }
                                else {
                                    action = `${ctrlPath}/${value}`;
                                    task = value;
                                }
                            }
                            break;
                        case 'type':
                            if (typeof value === "string") {
                                type = value.toLowerCase();
                            }
                            break;
                        case 'role':
                            if (typeof value === "string") {
                                roles = value.toLowerCase();
                            }
                            break;
                        default:
                        // code block
                    }
                }
                switch (type) {
                    case 'all':
                        controller.router.all(action, controller[task]);
                        break;
                    case 'get':
                        controller.router.get(action, controller[task]);
                        break;
                    case 'post':
                        controller.router.post(action, controller[task]);
                        break;
                    case 'put':
                        controller.router.put(action, controller[task]);
                        break;
                    case 'delete':
                        controller.router.delete(action, controller[task]);
                        break;
                    case 'patch':
                        controller.router.patch(action, controller[task]);
                        break;
                    case 'options':
                        controller.router.options(action, controller[task]);
                        break;
                    case 'head':
                        controller.router.head(action, controller[task]);
                        break;
                }
                //console.log(task, action, type, roles);
            });
            controllers[index] = controller;
        });
        return controllers;
    }
    load() {
        return this.controllers;
    }
}
exports.AutoLoader = AutoLoader;
;
//# sourceMappingURL=AutoLoader.js.map