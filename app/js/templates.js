this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["post"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "  <h3>New Pictures</h3>\n\n  <div id=\"picContainer1\"></div>\n\n  <div id=\"picContainer2\"></div>\n\n  2\n\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n<header>\n\n<h1>People Peephole!</h1>\n\n  <div id=\"scoreBoard\">\n    <h2>High Scores</h2>\n    <ul>\n      <li></li>\n      <li></li>\n      <li></li>\n    </ul>\n  </div>\n</header>\n\n\n\n\n\n\n<div id=\"pics\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["register"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<form id=\"userInfo\">\n  <input type=\"text\" id=\"firstName\" placeholder=\"First Name\">\n  <input type=\"text\" id=\"lastName\" placeholder=\"Last Name\">\n  <input type=\"email\" id=\"email\" placeholder=\"Email\">\n  <input type=\"password\" id=\"password\" placeholder=\"Password\">\n  <button id=\"addUser\">Add Me</button>\n  <br>\n  <h3 id=\"login-direct\">Already a user? Click here.</h3>\n</form>\n";
},"useData":true});