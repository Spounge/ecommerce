import axios from 'axios';


export async function getCategories()
{
  try {
    const res = await axios.get('/api/category/');
    const categories = res.data;
    return categories;
  } catch (e) {
    if (e.response.status == 404) {
      throw 404;
    } else {
      console.error(e);
    }
  }
}

export async function getProductCategory(id)
{
  try {
    const res = await axios.get(`/api/category/${id}`);
    const category = res.data;
    return category.products;
  } catch (e) {
    if (e.response.status == 404) {
      throw 404;
    } else {
      console.error(e);
    }
  }
}

export async function getOrder(id)
{
  try {
    const res = await axios.get(`/api/order/${id}`);
    const order = res.data;
    return order;
  } catch (e) {
    if (e.response.status == 404) {
      throw 404;
    } else {
      console.error(e);
    }
  }
}

export async function placeOrder(order)
{
  const data = new FormData();
  data.set('firstname', order.firstName);
  data.set('lastname', order.lastName);
  data.set('address', order.address);
  data.set('creditCardNb', order.creditCardNb);
  data.set('creditCardPin', order.creditCardPin);
  for (let i = 0; i < order.product_ids.length; i++) {
    data.set(`product_ids[${i}]`, order.product_ids[i]);
  }
  const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  try {
    const res = await axios.post('/api/order/', data, config);
    const id = res.data.id;
    return id;
  } catch (e) {
    console.error(e);
  }
}

export async function getAllProducts()
{
  try {
    const res = await axios.get('/api/product');
    const products = res.data;
    return products;
  } catch (e) {
    console.error(e);
  }
}

export async function getProduct(id)
{
  try {
    const res = await axios.get(`/api/product/${id}`);
    const product = res.data;
    return product;
  } catch (e) {
    console.error(e);
  }
}

export async function getProductArray(ids)
{
  try {
    const res = await axios.get('/api/product/array', {
      params: {
        ids: ids,
      },
    });
    const products = res.data;
    return products;
  } catch (e) {
    console.error(e);
  }
}