module.exports.register = function(Handlebars, options) {
    'use strict';

    Handlebars.registerHelper('author', function(author) {
        // var iniparser = require('iniparser'),
        var fs = require('fs'),
            gravatar = require('gravatar'),
            // homeDir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
            // configFile = homeDir + '/.gitconfig',
            // gitconfig,
            user,
            gravatarOptions = options.settings.gravatar,
            templateName = options.themeTemplates + '/partials/person.hbs',
            template;

        // if (fs.existsSync(configFile)) {
        // gitconfig = iniparser.parseSync(configFile);
        user = options.users[author];
        user.gravatar = gravatar.url(user.email, gravatarOptions);
        // }

        template = Handlebars.compile(fs.readFileSync(templateName, 'utf8'));
        return new Handlebars.SafeString(template(user));
    });
};
