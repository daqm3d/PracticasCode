export default {
  props: ['width', 'height'],
  template: `
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13 2.05S16 6 16 12"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11 21.95S8 18 8 12s3-9.95 3-9.95"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.63 15.5H12"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.63 8.5h18.74"
      stroke="#000000"
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      clip-rule="evenodd"
      d="M21.879 17.917c.493.304.462 1.043-.046 1.101l-2.567.29-1.151 2.313c-.228.46-.933.235-1.05-.333l-1.255-6.116c-.098-.479.334-.78.75-.524l5.319 3.271z"
      stroke="#000000"
      stroke-width="1.3"
    />
  </svg>`,
};
