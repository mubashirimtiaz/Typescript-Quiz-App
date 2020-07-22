"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_2 = require("@testing-library/react");
const App_1 = require("./App");
test('renders learn react link', () => {
    const { getByText } = react_2.render(<App_1.default />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
//# sourceMappingURL=App.test.jsx.map