/**
 * 
 * @authors 王昱森 (634206017@qq.com)
 * @date    2015-11-01 15:38:55
 * @version 0.0.1
 */

(function(w, f){
    var modules = {};

    if(!w.ysMod) {
        w.module = function () {
            var modName = arguments[0],
                mods = arguments[1],
                context = arguments[arguments.length - 1];

            if(modName instanceof Array) {
                mods = modName;
                modName = f;
            }

            var args = [];
            if(mods instanceof Array) {
                for(var i = 0; i < mods.length; i++) {
                    args.push(modules[mods[i]]);
                }
            }
            
            if(typeof modName === 'string') {
                modules[modName] = {};
                args.push(modules[modName]);
            }

            context.apply(this, args);

        }
        
        w.require = function (namne) {
            return modules[namne];
        }

        w.ysMod = true;
    }
    
}(window, undefined));


module('yusen', function (exports) {
    exports = {
        namne: '王昱森',
        gender: '男',
        age: 23,
        position: '前端开发工程师',
        exp: '编程三年，工作一年'
        city: '郑州',
        company: '九博人才网',
        status: '我目前在职，也考虑更好的工作机会',
        email: '634206017@qq.com',
        blog: 'http://www.imys.net/',
        github: 'https://github.com/yscoder',
        skill: [
            {
                name: 'HTML5/CSS3',
                value: '驾轻就熟'
            },
            {
                name: 'javascript',
                value: '驾轻就熟'
            },
            {
                name: 'java',
                value: '驾轻就熟'
            },
            {
                name: 'C#',
                value: '驾轻就熟'
            },
            {
                name: 'node.js',
                value: '初窥门径'
            }

        ]
    }
});