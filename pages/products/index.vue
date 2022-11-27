<template>
  <div>
    <h1>一覧</h1>
    <NuxtLogo /><br>
    <NuxtLink to = "/products/create">新規作成</NuxtLink>



    <table>
      <tr>
        <th>商品番号</th>
        <th>商品名</th>
        <th>詳細</th>
        <th>編集</th>
      </tr>
      <tr>
        <td>1</td>
        <td>テスト</td>
        <td>
          <NuxtLink to ="/products/1/show">詳細</NuxtLink>
        </td>
        <td>
          <NuxtLink to ="/products/1/edit">編集</NuxtLink>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>テスト</td>
        <td>
          <NuxtLink to ="/products/2/show">詳細</NuxtLink>
        </td>
        <td>
          <NuxtLink to ="/products/2/edit">編集</NuxtLink>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  asyncData() {
    console.log('asyncData');
  },
  created() {
    console.log('created');
  },
  fetch(context) {
    console.log('fetch');
  }
}
</script>

<style>

</style>
