export default {
  beforeMount(el, binding) {
    let iconClass = `fa fa-${binding.value.icon} text-xl text-green-400`;

    if (binding.value.right) {
      iconClass += ' float-right';
    }

    // eslint-disable-next-line no-param-reassign
    el.innerHTML += `<i class="${iconClass}"></i>`;
  },
};
