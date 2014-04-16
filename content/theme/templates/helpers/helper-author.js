module.exports.register = function (Handlebars, options)  {
    Handlebars.registerHelper('author', function () {
        var iniparser = require('iniparser'),
        fs = require('fs'),
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

        if (fs.existsSync(configFile)) {
            gitconfig = iniparser.parseSync(configFile);
            user = options.users[gitconfig.github.user];
            user.gravatar = gravatar.url(user.email, gravatarOptions);
        }

        template = Handlebars.compile(fs.readFileSync(templateName, 'utf8'));
        return new Handlebars.SafeString(template(user));
    });
};
