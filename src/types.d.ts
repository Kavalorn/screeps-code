// example declaration file - remove these and add your own custom typings

// memory extension samples

// @ts-ignore
enum RoleName {
  HARVESTER = "HARVESTER",
  BUILDER = "BUILDER",
  UPGRADER = "UPGRADER",
  OTHER_HARVESTER = "OTHER_HARVESTER",
  TRANSPORTER = "TRANSPORTER"
}

interface Role {
  run: (creep: Creep) => void
}


interface CreepMemory {
  role: RoleName;
  building?: boolean;
  upgrading?: boolean;
  harvesting?: boolean;
  transferring?: boolean;
  otherSource?: boolean;
}

interface Memory {
  uuid: number;
  log: any;
  creeps: Creep[]
}

// `global` extension samples
declare namespace NodeJS {
  interface Global {
    log: any;
  }
}
