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
					this.form    = {}
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
					this.form    = {}
					this.edit    = false
					this.verForm = false
				});
			}
		},
		eliminarCuenta(cuentaId) {
			if (confirm("¿Desea eliminar esta cuenta?")) {
				fetch("/api/cuentas/" + cuentaId, {
					method: "DELETE",
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json"
					}
				})
				.then(res => res.json())
				.then(data => {
					this.getCuentas()
				});
			}
		},
		nuevaCuenta() {
			this.form    = {}
			this.edit    = false
			this.verForm = true
		},
		cerrarFormulario() {
			this.form    = {}
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
			editar:false,
			cuentatEditar:null,
			verForm:false,
			cuentas:[],
			cuentas_tercero:[]
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
				this.verForm       = true
				this.form          = data
				this.cuentatEditar = data._id
				this.editar        = true
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
					this.getCuentasT();
					this.form    = {}
					this.verForm = false
				})
			} else {
				fetch("/api/cuentas_tercero/editar/" + this.cuentatEditar, {
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
					this.form    = {}
					this.editar  = false
					this.verForm = false
				});
			}
		},
		nuevaCuenta() {
			this.form    = {}
			this.editar  = false
			this.verForm = true
		},
		cerrarFormulario() {
			this.form    = {}
			this.editar  = false
			this.verForm = false
		}
	}
}

let appTransferencia = {
	template: "#vistaTransferencia",
	data: function () {
		return {
			form: {
				id_cuenta_origen:null,
				id_cuenta_destino:null,
				cuenta_origen: null,
				cuenta_destino: null,
				monto: 0
			},
			transferencias:{},
			cuentas:{},
			cuentas_tercero:{},
			transEditar:null,
			editar:false,
			verForm: false
		}
	},
	mounted: function () {
		this.getTransferencias()
		this.getCuentas()
		this.getCuentasTercero()
	},
	methods: {
		getCuentas(){
			fetch('/api/cuentas')
			.then(res => res.json())
			.then(data => {
				this.cuentas = data
			})
		},
		getCuentasTercero(){
			fetch('/api/cuentas_tercero')
			.then(res => res.json())
			.then(data => {
				this.cuentas_tercero = data
			})
		},
		getTransferencias() {
			fetch("/api/transferencia")
			.then(res => res.json())
			.then(data => {
				this.transferencias = data
			})
		},
		editarTransferencia(transId) {
			fetch("api/transferencia/editar/" + transId)
			.then(res => res.json())
			.then(data => {
				this.form    = data
				this.editar  = true
				this.verForm = true
			})
		},
		guadarTransferencia() {
			if (this.editar == false) {
				fetch("api/transferencia", {
					method:"POST",
					body: JSON.stringify(this.form),
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json"
					}
				})
				.then(res => res.json())
				.then(data => {
					this.getTransferencias()
					this.form    = {}
					this.editar  = false
					this.verForm = false
				})
			} else {
				fetch("/api/transferencia/editar/" + this.transEditar, {
					method: "PUT",
					body: JSON.stringify(this.form),
					headers: {
						"Accept": "application/json",
						"Content-Type": "application/json"
					}
				})
				.then(res => res.json())
				.then(data => {
					this.getTransferencias()
					this.form    = {}
					this.editar  = false
					this.verForm = false
				});
			}
		},
		nuevaTransferencia(){
			this.verForm = true
			this.editar  = false
			this.form    = {}
		},
		cerrarFormulario() {
			this.form    = {}
			this.editar  = false
			this.verForm = false
		},
		verCuenta(e) {
			this.form.cuenta_origen = null
			if(e.target.options.selectedIndex > -1) {
				this.form.cuenta_origen = e.target.options[e.target.options.selectedIndex].getAttribute("cuenta")
			}
		},
		verCuentaTercero(e) {
			this.form.cuenta_destino = null
			if(e.target.options.selectedIndex > -1) {
				this.form.cuenta_destino = e.target.options[e.target.options.selectedIndex].getAttribute("cuenta")
			}
		}
	}

}