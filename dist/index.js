"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.theme = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // Import theme


var _default = require("spectacle/lib/themes/default");

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialTheme = (0, _default2.default)({
	primary: "#FDF6E3",
	secondary: "#D2A03E",
	tertiary: "#FD853D",
	quartenary: "#657B83"
}, {
	primary: "Menlo"
});

var theme = exports.theme = _extends({}, initialTheme, {
	screen: _extends({}, initialTheme.screen, {
		components: _extends({}, initialTheme.screen.components, {
			code: _extends({}, initialTheme.screen.components.code, {
				color: initialTheme.screen.colors.quartenary
			}),
			text: _extends({}, initialTheme.screen.components.text, {
				color: initialTheme.screen.colors.quartenary
			}),
			link: _extends({}, initialTheme.screen.components.link, {
				color: initialTheme.screen.colors.secondary
			})
		})
	})
});