import * as React from "react";
export const Header = () => {
    return (React.createElement("div", { className: "collapse navbar-collapse", id: "navbarResponsive" },
        React.createElement("nav", { className: "navbar navbar-expand-lg navbar-dark fixed-top", id: "mainNav" },
            React.createElement("div", { className: "container" },
                React.createElement("a", { className: "navbar-brand js-scroll-trigger", href: "#page-top" },
                    React.createElement("img", { src: "assets/img/navbar-logo.svg", alt: "" })),
                React.createElement("button", { className: "navbar-toggler navbar-toggler-right", type: "button", "data-toggle": "collapse", "data-target": "#navbarResponsive", "aria-controls": "navbarResponsive", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    "Menu",
                    React.createElement("i", { className: "fa fa-bars ml-1" })),
                React.createElement("div", { className: "collapse navbar-collapse", id: "navbarResponsive" },
                    React.createElement("ul", { className: "navbar-nav text-uppercase ml-auto" },
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link js-scroll-trigger", href: "#services" }, "Services")),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link js-scroll-trigger", href: "#team" }, "Team")),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement("a", { className: "nav-link js-scroll-trigger", href: "#contact" }, "Contact"))))))));
};
//# sourceMappingURL=header.js.map