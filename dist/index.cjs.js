'use strict';

var React = require('react');
var lucideReact = require('lucide-react');

function styleInject(css, ref) {
  if ( ref === undefined ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".custom-button {\n    padding: 10px 20px;\n    background-color: blue;\n    color: white;\n    border: none;\n    cursor: pointer;\n  }";
styleInject(css_248z);

var Button = function Button(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement("button", {
    className: "custom-button",
    onClick: onClick
  }, children);
};

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    title = _ref.title,
    description = _ref.description,
    children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === undefined ? 'md' : _ref$size,
    _ref$position = _ref.position,
    position = _ref$position === undefined ? 'center' : _ref$position,
    _ref$showCloseButton = _ref.showCloseButton,
    showCloseButton = _ref$showCloseButton === undefined ? true : _ref$showCloseButton,
    _ref$closeOnOutsideCl = _ref.closeOnOutsideClick,
    closeOnOutsideClick = _ref$closeOnOutsideCl === undefined ? true : _ref$closeOnOutsideCl,
    _ref$closeOnEsc = _ref.closeOnEsc,
    closeOnEsc = _ref$closeOnEsc === undefined ? true : _ref$closeOnEsc,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === undefined ? 'bg-white dark:bg-gray-800' : _ref$backgroundColor;
  var modalRef = React.useRef(null);

  // Handle ESC key press
  React.useEffect(function () {
    var handleKeyDown = function handleKeyDown(event) {
      if (closeOnEsc && event.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return function () {
      return window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, closeOnEsc]);

  // Handle outside click
  React.useEffect(function () {
    var handleOutsideClick = function handleOutsideClick(event) {
      if (closeOnOutsideClick && modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return function () {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose, closeOnOutsideClick]);

  // Prevent body scroll when modal is open
  React.useEffect(function () {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return function () {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  if (!isOpen) return null;
  var sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4'
  };
  var positionClasses = {
    center: 'items-center',
    top: 'items-start pt-16'
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex justify-center overflow-y-auto bg-black/50 backdrop-blur-sm transition-opacity"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex w-full ".concat(positionClasses[position])
  }, /*#__PURE__*/React.createElement("div", {
    ref: modalRef,
    className: "relative m-auto ".concat(sizeClasses[size], " w-full rounded-lg ").concat(backgroundColor, " p-4 shadow-xl transition-all sm:p-6"),
    role: "dialog",
    "aria-modal": "true"
  }, showCloseButton && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-700 dark:hover:text-gray-200",
    "aria-label": "Close modal"
  }, "X"), (title || description) && /*#__PURE__*/React.createElement("div", {
    className: "mb-5 ".concat(showCloseButton ? 'pr-8' : '')
  }, title && /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold text-gray-900 dark:text-white"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "mt-1 text-sm text-gray-500 dark:text-gray-400"
  }, description)), /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, children))));
};

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : undefined;
  }
}

var Pagination = function Pagination(_ref) {
  var currentPage = _ref.currentPage,
    totalPages = _ref.totalPages,
    onPageChange = _ref.onPageChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex items-center space-x-2"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onPageChange(1);
    },
    disabled: currentPage === 1,
    className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50"
  }, /*#__PURE__*/React.createElement(lucideReact.ChevronsLeft, {
    className: "h-5 w-5"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onPageChange(currentPage - 1);
    },
    disabled: currentPage === 1,
    className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50"
  }, /*#__PURE__*/React.createElement(lucideReact.ChevronLeft, {
    className: "h-5 w-5"
  })), /*#__PURE__*/React.createElement("span", {
    className: "px-4 py-2 text-sm font-medium text-gray-700"
  }, "Page ", currentPage, " of ", totalPages), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onPageChange(currentPage + 1);
    },
    disabled: currentPage === totalPages,
    className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50"
  }, /*#__PURE__*/React.createElement(lucideReact.ChevronRight, {
    className: "h-5 w-5"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onPageChange(totalPages);
    },
    disabled: currentPage === totalPages,
    className: "p-2 rounded-md hover:bg-gray-100 disabled:opacity-50"
  }, /*#__PURE__*/React.createElement(lucideReact.ChevronsRight, {
    className: "h-5 w-5"
  })));
};

function Table(_ref) {
  var columns = _ref.columns,
    data = _ref.data,
    _ref$itemsPerPage = _ref.itemsPerPage,
    itemsPerPage = _ref$itemsPerPage === undefined ? 10 : _ref$itemsPerPage;
  var _useState = React.useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    searchTerm = _useState2[0],
    setSearchTerm = _useState2[1];
  var _useState3 = React.useState(1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentPage = _useState4[0],
    setCurrentPage = _useState4[1];
  var _useState5 = React.useState({
      key: null,
      direction: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    sortConfig = _useState6[0],
    setSortConfig = _useState6[1];

  // Filtrage des données
  var filteredData = React.useMemo(function () {
    if (!searchTerm) return data;
    return data.filter(function (item) {
      return Object.values(item).some(function (value) {
        return String(value).toLowerCase().includes(searchTerm.toLowerCase());
      });
    });
  }, [data, searchTerm]);

  // Tri des données
  var sortedData = React.useMemo(function () {
    if (!sortConfig.key) return filteredData;
    return _toConsumableArray(filteredData).sort(function (a, b) {
      var _a$sortConfig$key, _b$sortConfig$key;
      var aValue = (_a$sortConfig$key = a[sortConfig.key]) !== null && _a$sortConfig$key !== undefined ? _a$sortConfig$key : '';
      var bValue = (_b$sortConfig$key = b[sortConfig.key]) !== null && _b$sortConfig$key !== undefined ? _b$sortConfig$key : '';
      return sortConfig.direction === 'asc' ? aValue < bValue ? -1 : 1 : aValue > bValue ? -1 : 1;
    });
  }, [filteredData, sortConfig]);

  // Pagination
  var totalPages = Math.ceil(sortedData.length / itemsPerPage);
  var paginatedData = sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Gestion du tri
  var handleSort = function handleSort(accessor) {
    setSortConfig(function (prev) {
      return {
        key: accessor,
        direction: prev.key === accessor && prev.direction === 'asc' ? 'desc' : 'asc'
      };
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mb-4 relative"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Search...",
    value: searchTerm,
    onChange: function onChange(e) {
      return setSearchTerm(e.target.value);
    },
    className: "w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
  }), /*#__PURE__*/React.createElement(lucideReact.Search, {
    className: "absolute left-3 top-2.5 h-5 w-5 text-gray-400"
  })), /*#__PURE__*/React.createElement("div", {
    className: "overflow-x-auto rounded-lg border border-gray-200"
  }, /*#__PURE__*/React.createElement("table", {
    className: "min-w-full divide-y divide-gray-200"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "bg-gray-50"
  }, /*#__PURE__*/React.createElement("tr", null, columns.map(function (column) {
    return /*#__PURE__*/React.createElement("th", {
      key: String(column.accessor),
      className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ".concat(column.sortable ? 'cursor-pointer select-none' : ''),
      onClick: function onClick() {
        return column.sortable && handleSort(column.accessor);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "flex items-center space-x-1"
    }, /*#__PURE__*/React.createElement("span", null, column.header), column.sortable && /*#__PURE__*/React.createElement("span", {
      className: "inline-flex flex-col"
    }, /*#__PURE__*/React.createElement(lucideReact.ChevronUp, {
      className: "h-3 w-3 ".concat(sortConfig.key === column.accessor && sortConfig.direction === 'asc' ? 'text-blue-500' : 'text-gray-400')
    }), /*#__PURE__*/React.createElement(lucideReact.ChevronDown, {
      className: "h-3 w-3 -mt-1 ".concat(sortConfig.key === column.accessor && sortConfig.direction === 'desc' ? 'text-blue-500' : 'text-gray-400')
    }))));
  }))), /*#__PURE__*/React.createElement("tbody", {
    className: "bg-white divide-y divide-gray-200"
  }, paginatedData.map(function (row, rowIndex) {
    return /*#__PURE__*/React.createElement("tr", {
      key: rowIndex,
      className: "hover:bg-gray-50 transition-colors"
    }, columns.map(function (column) {
      return /*#__PURE__*/React.createElement("td", {
        key: String(column.accessor),
        className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900"
      }, String(row[column.accessor]));
    }));
  })))), /*#__PURE__*/React.createElement(Pagination, {
    currentPage: currentPage,
    totalPages: totalPages,
    onPageChange: setCurrentPage
  }));
}

exports.Button = Button;
exports.Modal = Modal;
exports.Pagination = Pagination;
exports.Table = Table;
//# sourceMappingURL=index.cjs.js.map
