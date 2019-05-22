<template>
	<div class="address">
		<top-nav title="地址管理"></top-nav>

		<van-address-list
		  v-model="chosenAddressId"
		  ref="add"
		  :list="addressList"
		  @edit="editAddress"
		  @add="addAddress"
		  @click.native="toggleDefault"
		 />

		<van-actionsheet v-model="show">
			<van-address-edit
			  :area-list="area"
			  show-set-default
			  show-search-result
			  show-delete
			  show-postal
			  :address-info="addressInfo"
			  save-button-text="保存地址"
			  delete-button-text="取消"
			  @save="save"
			/>
		</van-actionsheet>


		<van-actionsheet v-model="editShow" cancel-text="取消" :actions="actions" @select="onSelect">
		</van-actionsheet>
	</div>
</template>

<script>

	import TopNav from '../components/TopNav'

	import { AddressList, Actionsheet, AddressEdit } from 'vant'

	import area from '../data/area.js'

	import date from '../utils/tool.js'

	export default {
		name: 'Address',

		data() {
			return {
				//上拉菜单框
				show: false,

				editShow: false,

				actions: [
	        {
	          name: '编辑地址'
	        },
	        {
	          name: '删除地址',
	        }
      	],

      	addressInfo: {
      		id: '',
      		name: '',
      		tel: '',
      		province: '',
      		city: '',
      		county: '',
      		addressDetail: '',
      		areaCode: '',
      		postalCode: '',
      		isDefault: ''
      	},

				//全国地址信息
				area,

				chosenAddressId: '', //默认选择地址, 关联地址的id

				//当前用户的地址数据
				addressList: [],

				//用户id
				userId: '',

				//删除页面的地址下标
				index: -1,

				id: -1,

				//编辑地址数据
				item: {},

				//编辑或者新增地址的标记, -1: 新增, 0: 编辑
				isEdit: -1

			};
		},

		components: {
			'top-nav': TopNav,
			[AddressList.name]: AddressList,
			[Actionsheet.name]: Actionsheet,
			[AddressEdit.name]: AddressEdit 
		},

		created() {

			//获取本地存储的地址管理数据
			var addressData = localStorage.getItem('address');

			addressData = addressData == undefined ? [] : JSON.parse(addressData);

			//获取用户id
			this.userId = JSON.parse(localStorage.getItem('userLogin')).userId;

			//筛选当前用户的地址
			addressData.forEach(v => {
				if (this.userId == v.userId) {
					if (v.isDefault) {
						this.chosenAddressId = v.id;
					}
					this.addressList.push(v);
				}
			})

		},

		mounted() {
			this.$refs.add.lastChild.style.zIndex = 1999;

		},

		methods: {

			//地址编辑
			editAddress(item, index) {

				this.editShow = true;

				this.index = index;

				this.id = item.id;

				this.item = item;
			},

			//新增地址
			addAddress() {
				this.show = true;
			},

			//保存地址
			save(data) {
				
				//获取本地存储的地址管理数据
				var addressData = localStorage.getItem('address');

				addressData = addressData == undefined ? [] : JSON.parse(addressData);

				if (data.isDefault && addressData.length > 0) {
					//如果默认地址, 需要把当前用户地址的默认值设置为false

					for (var i = 0; i < addressData.length; i++) {
						if (this.userId == addressData[i].userId && addressData[i].isDefault) {

							addressData[i].isDefault = false;
							break;

						}
					}
				}



				//如果是新增地址
				if (this.isEdit == -1) {
					var time = new Date();

					//生成地址id, 加盐(撒盐)
					var addressId = 'address' + time.getTime();

					data.userId = this.userId;

					data.id = addressId;

					data.addTime = date.format(time, 'yyyy-MM-dd hh:mm:ss');

					data.editTime = '';

					data.address = data.province + data.city + data.county + data.addressDetail;

					

					addressData.push(data);

					//将当前地址添加到页面上
					if (data.isDefault) {
						for (var i = 0; i < this.addressList.length; i++) {
							if (this.addressList[i].isDefault) {
								this.addressList[i].isDefault = false;
								this.chosenAddressId = addressId;
								break;
							}
						}
					}

					this.addressList.push(data);
				} else if (this.isEdit == 0) {
					//编辑地址
					for (var j = 0; j < addressData.length; j++) {
						if (addressData[j].id == data.id) {
							for (var k in data) {
								addressData[j][k] = data[k];
								this.item[k] = data[k];
							}

							if (data.isDefault) {
								this.chosenAddressId = data.id;
							}
							this.item.address = data.province + data.city + data.county + data.addressDetail;

							break;
						}
					}
				}

				localStorage.setItem('address', JSON.stringify(addressData));

				this.show = false;

				for (var key in this.addressInfo) {
					this.addressInfo[key] = '';
				}

				this.isEdit = -1;

			},

			//删除和编辑地址
			onSelect(item, index) {
				if (index === 0) {
					//编辑地址
					this.show = true;

					for (var key in this.addressInfo) {
						this.addressInfo[key] = this.item[key];
					}

					this.isEdit = index;

				} else if (index === 1) {
					//删除地址
					this.addressList.splice(this.index, 1);

					//获取本地存储的地址管理数据
					var addressData = JSON.parse(localStorage.getItem('address'));

					for (var i = 0; i < addressData.length; i++) {
						if (addressData[i].id == this.id) {
							addressData.splice(i, 1);
							break;
						}
					}

					localStorage.setItem('address', JSON.stringify(addressData));

					this.isEdit = 1;

				}


				this.editShow = false;
			},

			//修改默认地址
			toggleDefault() {
				//获取本地存储的地址管理数据
				var addressData = JSON.parse(localStorage.getItem('address'));

				for (var i = 0; i < addressData.length; i++) {
					if (this.userId == addressData[i].userId && addressData[i].isDefault) {
						addressData[i].isDefault = false;
						break;
					}
				}

				for (var j = 0; j < addressData.length; j++) {
					if (this.chosenAddressId == addressData[j].id) {
						addressData[j].isDefault = true;
						break;
					}
				}

				localStorage.setItem('address', JSON.stringify(addressData));


			}

		}

	}
</script>

<style lang="less" scoped>

</style>