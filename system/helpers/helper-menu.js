module.exports.register = function(Handlebars, options) {
    'use strict';

    Handlebars.registerHelper('menu', function(currentPage, maxLevels, startingLevel) {
        var fs = require('fs'),
            templateName = options.themeTemplates + '/partials/menu.hbs',
            template, menuItems = [],
            dest = options.site.dest,
            items = options.site.menu;
        if (isNaN(maxLevels)) {
            maxLevels = 1;
        }
        if (isNaN(startingLevel)) {
            startingLevel = 1;
        }

        currentPage = currentPage.replace(dest, '');

        items.forEach(function(element) {
            var path = '/' + element.href;
            path = path.replace('//', '/');
            var el = {
                text: element.name,
                href: path
            };
            if (maxLevels > 1 && element.submenu) {
                console.log(element.name);
            }
            if (path + '/index.html' === currentPage ||
                (path === '/' && '/index.html' === currentPage)) {
                el.current = true;
            }
            menuItems.push(el);
        });

        menuItems = {
            items: menuItems
        };

        template = Handlebars.compile(fs.readFileSync(templateName, 'utf8'));
        return new Handlebars.SafeString(template(menuItems));
    });
};
