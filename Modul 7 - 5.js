class ElectricalAppliance {
	constructor(name) {
		this.device = 'device';
		this.name = name
	}

	getPowerConsumption (power, t, on) {
		let turnOn = on
		if(on === 1){
			turnOn = 'Вкл'
		}else{
			turnOn = 'Выкл'
		}
		
	
		console.log(`Расход эл. энергии ${this.name} - (${this.location}) за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`)
	}

}

class Characteristic extends ElectricalAppliance {
	constructor (name, location) {
		super(name);
		this.location = location
	}
}

const lamp = new Characteristic ('lamp', 'living room')
const computer = new Characteristic ('computer', 'office')
const microwave = new Characteristic ('microwave', 'kitchen')

console.log(lamp, computer, microwave)
lamp.getPowerConsumption(100, 6, 1)
computer.getPowerConsumption(300, 8, 1)
microwave.getPowerConsumption(1100, 1)