var app = new Vue({
	el: "#app",
	data: {
		vistaCuenta:false,
		vistaTransferencia:false,
		form:[]
	},
	methods: {
		cuentas() {
			this.vistaCuenta        = true
			this.vistaCuentaT       = false
			this.vistaTransferencia = false
		},
		cuentastercero() {
			this.vistaCuenta        = false
			this.vistaCuentaT       = true
			this.vistaTransferencia = false
		},
		tranferencia() {
			this.vistaCuenta        = false
			this.vistaCuentaT       = false
			this.vistaTransferencia = true
		}
	},
	components: {
		"v-cuenta":appCuenta,
		"v-cuentat": appCuentaTercero,
		"v-transferencia": appTransferencia
	}
})