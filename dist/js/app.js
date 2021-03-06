"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Application = function () {
    function Application() {
        _classCallCheck(this, Application);

        this.initTpl();
    }

    _createClass(Application, [{
        key: "initTpl",
        value: function initTpl() {
            this.tpl = "\n            <main class=\"site-content\">\n                <section class=\"box\">\n                    <h1 id=\"site-name\">Jean Bispo</h1>\n                    <div id=\"site-subtitle\">dev front-end</div>\n                    <nav id=\"menu\">\n                        <ul>\n                            <li><a class=\"enabled\" href=\"about.html\">about</a></li>\n                            <li><a class=\"disabled\" href=\"\">blog</a></li>\n                            <li><a class=\"enabled\" target=\"_blank\" href=\"https://www.linkedin.com/in/jeanbispo/\">linkedin</a></li>\n                            <li><a class=\"disabled\" href=\"\">cv</a></li>\n                        </ul>\n                    </nav>\n                </section>\n            </main>\n        ";
        }
    }, {
        key: "render",
        value: function render() {
            document.getElementById("root").innerHTML = this.tpl;
        }
    }]);

    return Application;
}();

new Application().render();