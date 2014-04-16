module.exports.register = function (Handlebars, options)  {
    Handlebars.registerHelper('menu', function (items, currentPage) {
        var fs = require('fs'),
        templateName = __dirname + '/../partials/menu.hbs',
        template, menuItems = [], dest = options.sitemap.dest;

        currentPage = currentPage.replace(dest, '');
        // console.log(currentPage);
        Object.keys(items).forEach(function (element) {
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
