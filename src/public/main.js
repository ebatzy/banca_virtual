var app = new Vue({
	el: "#app",
	data: {
		vistaCuenta:false,
		form:[]
	},
	methods: {
		cuentas(){
			this.vistaCuenta = true
		}
	},
	components: {
		"v-cuenta":appCuenta
	}
})