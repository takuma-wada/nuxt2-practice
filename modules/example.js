export default function() {
  console.log('module test');

  this.nuxt.hook('ready', async nuxt => {
    console.log('Nuxt is ready');
  })
}
