export default async function (context) {
  const cart = await context.store.getters['getCartItemsCount']
  if (cart>0) {
    // let the user see the page
  } else {
    // redirect to homepage
    context.redirect('/')
  }
}
