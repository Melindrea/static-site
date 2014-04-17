module.exports.register = function(Handlebars, options) {
    'use strict';

    Handlebars.registerHelper('menu', function(currentPage) {
        var fs = require('fs'),
            templateName = options.themeTemplates + '/partials/menu.hbs',
            template, menuItems = [],
            dest = options.site.dest,
            items = options.site.menu;

        currentPage = currentPage.replace(dest, '');
        Object.keys(items).forEach(function(element) {
            var path = '/' + this[element],
                el = {
                    text: element,
                    href: path
                };

            if (path === currentPage) {
                el.attributes = 'class="active"';
            }
            menuItems.push(el);
        }, items);

        menuItems = {
            items: menuItems
        };

        template = Handlebars.compile(fs.readFileSync(templateName, 'utf8'));
        return new Handlebars.SafeString(template(menuItems));
    });
};
