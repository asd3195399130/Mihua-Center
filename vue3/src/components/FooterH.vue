<template>
  <div>
    <ol v-stripe="'li'">
      <li v-for="item in data" :key="item" >{{ item }}</li>
    </ol>
  </div>
</template>
<script lang="ts" setup>
let data = [
  '学而时习之，不亦说乎？',
  '有朋自远方来，不亦乐乎？',
  '三人行，必有我师焉。择其善者而从之，其不善者而改之。',
  '君子周而不比，小人比而不周。',
  '知者不惑，仁者不忧，勇者不惧。',
  '学而不思则罔，思而不学则殆。',
  '巧言令色，鲜矣仁。',
  '温故而知新，可以为师矣。',
  '知之者不如好之者，好之者不如乐之者。',
  '君子坦荡荡，小人长戚戚。',
  '见贤思齐焉，见不贤而内自省也。',
  '为政以德，譬如北辰，居其所而众星共之。',
  '人而无信，不知其可也。',
  '士不可以不弘毅，任重而道远。',
  '君子耻其言而过其行。',
  '学而不厌，诲人不倦。',
  '君子成人之美，不成人之恶。',
  '君子欲讷于言而敏于行。',
  '学而知不足，教而知困。',
  '知者乐水，仁者乐山。',
  '学而时习之，不亦悦乎？',
];
</script>

<style scoped>
li {
  text-align: left;
  width: 1500px;
  font-size: 50px;
  font-family: '隶书';
  margin-left: 60px;
  margin: auto;
}
</style>