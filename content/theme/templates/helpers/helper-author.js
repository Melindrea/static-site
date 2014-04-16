module.exports.register = function (Handlebars, options)  {
    Handlebars.registerHelper('author', function (author) {
        // var iniparser = require('iniparser'),
        var fs = require('fs'),
        gravatar = require('gravatar'),
        homeDir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE,
        configFile = homeDir + '/.gitconfig', gitconfig, user,
        gravatarOptions = {
            s: 51,
            d: 'mm',
            r: 'g'
        },
        templateName = __dirname + '/../partials/person.hbs',
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
