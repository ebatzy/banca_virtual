let appCuenta = {
	template: "#vistaCuenta",
	data: function () {
		return {
			form:{
				no_cuenta: null,
				nombre_cuenta: null
			},
			vistaCuenta:true,
			cuentas:[],
			editar:false,
			cuentaEditar:null,
			verForm:false
		}
	},
	mounted: function () {
		this.getCuentas()
	},
	methods: {
		getCuentas(){
			fetch('/api/cuentas')
			.then(res => res.json())
			.then(data => {
				this.cuentas = data
			})
		},
		editarCuenta(cuentaId) {
			fetch('/api/cuentas/editar/' + cuentaId)
			.then(res => res.json())
			.then(data => {
				this.form         = data
				this.cuentaEditar = data._id
				this.editar       = true
				this.verForm      = true
			});
		},
		guardarCuenta(){
			if (this.editar === false) {
				fetch("/api/cuentas", {
					method: "POST",
					body: JSON.stringify(this.form),
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json"
					}
				})
				.then(res => res.json())
				.then(data => {
					this.getCuentas();
					this.form    = [];
					this.verForm = false
				})
			} else {
				fetch("/api/cuentas/editar/" + this.cuentaEditar, {
					method: "PUT",
					body: JSON.stringify(this.form),
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json"
					}
				})
				.then(res => res.json())
				.then(data => {
					this.getCuentas()
					this.form    = []
					this.edit    = false
					this.verForm = false
				});
			}
		},
		nuevaCuenta() {
			this.form    = []
			this.edit    = false
			this.verForm = true
		},
		cerrarFormulario() {
			this.form    = []
			this.edit    = false
			this.verForm = false
		}
	}
}

let appCuentaTercero = {
	template: "#vistaCuentaT",
	data: function () {
		return {
			form:{
				id_cuenta: null,
				no_cuenta: null,
				alias: null
			},
			vistaCuentaT:true,
			cuentas_tercero:[],
			editar:false,
			cuentaEditar:null,
			verForm:false,
			cuentas:[]
		}
	},
	mounted: function () {
		this.getCuentasT()
		this.getCuentas()
	},
	methods: {
		getCuentas() {
			fetch('/api/cuentas')
			.then(res => res.json())
			.then(data => {
				this.cuentas = data
			})
		},
		getCuentasT(){
			fetch('/api/cuentas_tercero')
			.then(res => res.json())
			.then(data => {
				this.cuentas_tercero = data
			})
		},
		editarCuentaT(cuentaId) {
			fetch('/api/cuentas_tercero/editar/' + cuentaId)
			.then(res => res.json())
			.then(data => {
				this.verForm      = true
				this.form         = data
				this.cuentaEditar = data._id
				this.editar       = true
			});
		},
		guardarCuentaT(){
			if (this.editar === false) {
				fetch("/api/cuentas_tercero", {
					method: "POST",
					body: JSON.stringify(this.form),
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json"
					}
				})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					this.getCuentasT();
					this.form    = []
					this.verForm = false
				})
			} else {
				fetch("/api/cuentas_tercero/editar/" + this.cuentaEditar, {
					method: "PUT",
					body: JSON.stringify(this.form),
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json"
					}
				})
				.then(res => res.json())
				.then(data => {
					this.getCuentasT()
					this.form    = []
					this.edit    = false
					this.verForm = false
				});
			}
		},
		nuevaCuenta() {
			this.form    = []
			this.edit    = false
			this.verForm = true
		},
		cerrarFormulario() {
			this.form    = []
			this.edit    = false
			this.verForm = false
		}
	}
}

let appTransferencia = {
	template: "#vistaTransferencia",
	data: function () {
		return {
			form: {
				id_cuenta: null,
				cuenta_destino: null,
				monto: 0
			}
		}
	}

}