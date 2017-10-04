<template>
	<div class="home-page">
		<img src="../assets/logo_.gif"/>
		<h1>NIMP Is My Potager, l'application qui va révolutionner vos vies (ou au moins vot' potager).</h1>
    <button @click="find">FindData</button>
    <button @click="insert">Inseeeeeeeeeeeeeeeeert</button>
    <div id="data"></div>
	</div>
</template>

<script>
/* eslint-disable */
import Potager from '../../db/potager';

export default {
  methods: {
    find() {
      Potager.getAll(console.log);
    },
    insert() {
      Potager.insert('nepo', 10, 10, 20, 20);
    },
  },
};

</script>

<style>
	.home-page {
		position: absolute;
		z-index: 0;
		background: #222;
		width: 100%;
		height: 100%;
		text-align: center;
		padding: 50px;
		color: #fff;
	}
</style>
