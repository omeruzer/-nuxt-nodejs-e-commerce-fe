import axios from 'axios'
const state = {
  cart: [],
  delivery: 100,
}
const getters = {
  getCart(state) {
    return state.cart
  },

  getCartItemsCount(state) {
    var qty = 0

    state.cart.forEach(element => {
      var totalCount = element.amount
      qty = qty + totalCount
    });

    return qty;
  },

  getCartSubtotal(state) {
    var total = 0;

    state.cart.forEach(element => {
      var subTotal = element.amount * element.item.price
      total = total + subTotal
    });

    return total;
  },

  getCartTotal(state) {

    var subtotal = 0;

    state.cart.forEach(element => {
      var cartsubtotal = element.amount * element.item.price
      subtotal = subtotal + cartsubtotal
    });

    var total = state.delivery + subtotal

    return total;
  }
}
const mutations = {
  addCart(state, product) {

    const checkCart = state.cart.find(a => a.item._id === product._id)
    if (checkCart) {
      checkCart.amount++
    } else {
      state.cart.push({
        item: product,
        amount: 1
      })
    }
    localStorage.setItem('cart', JSON.stringify(state.cart))
    state.cart = JSON.parse(localStorage.getItem('cart'))
  },

  removeToCart(state, product) {
    const checkCart = state.cart.find(a => a.item._id === product._id)
    if (checkCart) {
      checkCart.amount--
      if (checkCart.amount == 0) {
        checkCart.amount++
      }
    }
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },

  removeProduct(state, product) {
    const checkCart = state.cart.find(a => a.item._id === product._id)
    const productIndex = state.cart.indexOf(checkCart)

    state.cart.splice(productIndex, 1)
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },

  unloadToCart(state) {
    state.cart = []
    console.log(state.cart);
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
}
const actions = {
  addCart(context, id) {
    axios.get(`http://localhost:5000/api/product/${id}`)
      .then((result) => {
        context.commit('addCart', result.data)
      }).catch((err) => {
        console.log(err);
      });
  },
  removeToCart(context, id) {
    axios.get(`http://localhost:5000/api/product/${id}`)
      .then((result) => {
        context.commit('removeToCart', result.data)
      }).catch((err) => {
        console.log(err);
      });
  },
  removeProduct(context, id) {
    axios.get(`http://localhost:5000/api/product/${id}`)
      .then((result) => {
        context.commit('removeProduct', result.data)
      }).catch((err) => {
        console.log(err);
      });
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
