export default {
  props: ['width', 'height'],
  template: `
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.82 20.768 3.753 3.968A.6.6 0 0 1 4.227 3h2.48a.6.6 0 0 1 .473.232l13.067 16.8a.6.6 0 0 1-.474.968h-2.48a.6.6 0 0 1-.473-.232z"
      stroke="#000000"
      stroke-width="1.3"
    />
    <path
      d="M20 3 4 21"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
    />
  </svg>`,
};
