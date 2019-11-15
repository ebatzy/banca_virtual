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
			cuentaEditar:null
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
					this.form = [];
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
					this.form = []
					this.edit = false
				});
			}
		}
	}
}