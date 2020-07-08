<template>
  <div>
    <h3 style="margin-left: 250px"> Money 💰 </h3>
    <p style="font-weight: bold"> Input naira money (₦) : 
    <masked-input id="money" type="text" v-model="amount" :mask="nairaMask" :guide="false" />
    <button class="btn" type="reset" @click="clearText()"> Clear </button>
    <button type="button" @click="cal()"> Convert to Thai Money (฿) </button></p>
  <div>
    <p style="font-size: 14px;"> ** ₦1 naira = 0.080฿ </p>
  </div>
  </div>
</template>

<script>
import MaskedInput from 'vue-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export default {
  name: 'VueComponent',
  components: {
    MaskedInput
  },
  props: {
    initialAmount: {
      type: Number,
      default: () => 0
    }
  },
  data() {
    return {
      nairaMask: createNumberMask({ prefix: '₦', allowDecimal: true }),
      amount: `${this.initialAmount}`,
    };
  },
  watch: {
    amount(str) {
      const amount = str.length ? parseFloat(str.replace(/[₦]/g, '')) : 0;
      this.$emit('input', amount);
    }
  },
  methods: {
    clearText(){
      document.getElementById('money').value = '';
    },
    cal(){
      var cal2 = this.amount;
      var cal = cal2.substr(1)*0.080 + '฿';
      // return cal;
      document.getElementById('money').value = cal;
    }
  }
};

</script>

<style>
.btn { margin: 5px; }
</style>