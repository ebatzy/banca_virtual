var app = new Vue({
	el: "#app",
	data: {
		vistaCuenta:false,
		vistaCuentaT:false,
		vistaTransferencia:false,
		vistaAcerca:false,
		vistaInicio:true,
		form:{}
	},
	methods: {
		cuentas() {
			this.vistaInicio        = false
			this.vistaCuenta        = true
			this.vistaCuentaT       = false
			this.vistaTransferencia = false
			this.vistaAcerca        = false
		},
		cuentastercero() {
			this.vistaInicio        = false
			this.vistaCuenta        = false
			this.vistaCuentaT       = true
			this.vistaTransferencia = false
			this.vistaAcerca        = false
		},
		tranferencia() {
			this.vistaInicio        = false
			this.vistaCuenta        = false
			this.vistaCuentaT       = false
			this.vistaTransferencia = true
			this.vistaAcerca        = false
		},
		acerca() {
			this.vistaInicio        = false
			this.vistaCuenta        = false
			this.vistaCuentaT       = false
			this.vistaTransferencia = false
			this.vistaAcerca        = true
		}
	},
	components: {
		"v-cuenta":appCuenta,
		"v-cuentat": appCuentaTercero,
		"v-transferencia": appTransferencia
	}
})