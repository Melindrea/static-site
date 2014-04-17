module.exports.register = function(Handlebars, options) {
    'use strict';

    Handlebars.registerHelper('menu', function(currentPage) {
        var fs = require('fs'),
            templateName = options.themeTemplates + '/partials/menu.hbs',
            template, menuItems = [],
            dest = options.site.dest,
            items = options.site.menu;

        currentPage = currentPage.replace(dest, '');

        items.forEach(function(element) {
            var path = '/' + element.href;
            if (path === '/null') {
                path = '/';
            }
            var el = {
                text: element.name,
                href: path
            };
            console.log(currentPage);
            if (path + '/index.html' === currentPage ||
                (path === '/' && '/index.html' === currentPage)) {
                el.attributes = 'class="active"';
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
