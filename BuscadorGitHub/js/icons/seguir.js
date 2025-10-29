export default {
  props: {
    width: {
      type: [String, Number],
      default: '24',
    },
    height: {
      type: [String, Number],
      default: '24',
    },
    titulo: {
      type: String,
      default: null,
    },
  },
  template: `
  <svg
    :width="width"
    :height="height"
    stroke-width="1.3"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  <title v-if="titulo">{{ titulo }}</title>
    <path
      d="M6 3H3V6"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="--darkreader-inline-stroke: #000000;"
      data-darkreader-inline-stroke=""
    ></path>
    <path
      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="--darkreader-inline-stroke: #000000;"
      data-darkreader-inline-stroke=""
    ></path>
    <path
      d="M21 12C19.1114 14.991 15.7183 18 12 18C8.2817 18 4.88856 14.991 3 12C5.29855 9.15825 7.99163 6 12 6C16.0084 6 18.7015 9.1582 21 12Z"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="--darkreader-inline-stroke: #000000;"
      data-darkreader-inline-stroke=""
    ></path>
    <path
      d="M18 3H21V6"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="--darkreader-inline-stroke: #000000;"
      data-darkreader-inline-stroke=""
    ></path>
    <path
      d="M6 21H3V18"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="--darkreader-inline-stroke: #000000;"
      data-darkreader-inline-stroke=""
    ></path>
    <path
      d="M18 21H21V18"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="--darkreader-inline-stroke: #000000;"
      data-darkreader-inline-stroke=""
    ></path>
  </svg>`,
};
