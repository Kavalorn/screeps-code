
const harvester: Role = {
  run: (creep) => {
    if (creep.store.getUsedCapacity() === 0) creep.memory.transferring = false;
    if (creep.store.energy < creep.store.getCapacity() && !creep.memory.transferring) {
      const source = creep.room.find(FIND_SOURCES)[creep.memory.otherSource ? 1 : 0];
      if (creep.harvest(source) === ERR_NOT_IN_RANGE) creep.moveTo(source);
      if (creep.harvest(source) === OK) {
        if (!creep.memory.harvesting) creep.memory.harvesting = true
      }
    }
    else {
      const targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (
            structure.structureType === STRUCTURE_EXTENSION ||
            structure.structureType === STRUCTURE_SPAWN ||
            structure.structureType === STRUCTURE_TOWER
          ) && structure.energy < structure.energyCapacity;
        }
      });

      if (creep.memory.harvesting) creep.memory.harvesting = false;

      if (targets.length > 0 && creep.store.getUsedCapacity() && !creep.memory.harvesting) {
        creep.memory.transferring = true;
        if (creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) creep.moveTo(targets[0]);
        if (creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_FULL) creep.moveTo(targets[0]);
      }

    }
  }
};
export default harvester;
