export const CpuState = (raceCpuData) => {
  totalValue = [];
  if (raceCpuData != "") {
    raceCpuData.map((item) => {
      let condition = "";
      let strength = "";
      let stamina = "";
      let speed = "";
      let moment = "";
      let health = "";

      if (item.condition_b == "S") {
        condition = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.condition_b == "A") {
        condition = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.condition_b == "B") {
        condition = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.condition_b == "C") {
        condition = Math.floor(Math.random() * (201 - 100) + 100);
      }

      if (item.strength == "S") {
        strength = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.strength == "A") {
        strength = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.strength == "B") {
        strength = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.strength == "C") {
        strength = Math.floor(Math.random() * (201 - 100) + 100);
      }

      if (item.stamina == "S") {
        stamina = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.stamina == "A") {
        stamina = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.stamina == "B") {
        stamina = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.stamina == "C") {
        stamina = Math.floor(Math.random() * (201 - 100) + 100);
      }

      if (item.speed == "S") {
        speed = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.speed == "A") {
        speed = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.speed == "B") {
        speed = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.speed == "C") {
        speed = Math.floor(Math.random() * (201 - 100) + 100);
      }

      if (item.moment == "S") {
        moment = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.moment == "A") {
        moment = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.moment == "B") {
        moment = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.moment == "C") {
        moment = Math.floor(Math.random() * (201 - 100) + 100);
      }

      if (item.health == "S") {
        health = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.health == "A") {
        health = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.health == "B") {
        health = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.health == "C") {
        health = Math.floor(Math.random() * (201 - 100) + 100);
      }
      totalValue.push(condition + strength + stamina + speed + moment + health);
    });
  }
  return totalValue;
};

export const cpuSpeed = (raceCpuData) => {
  speedValue = [];
  if (raceCpuData != "") {
    raceCpuData.map((item) => {
      let speed = "";

      if (item.speed == "S") {
        speed = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.speed == "A") {
        speed = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.speed == "B") {
        speed = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.speed == "C") {
        speed = Math.floor(Math.random() * (201 - 100) + 100);
      }
      speedValue.push(speed);
    });
  }
  return speedValue;
};

export const cpuCondition = (raceCpuData) => {
  conditionValue = [];
  if (raceCpuData != "") {
    raceCpuData.map((item) => {
      let condition = "";
      if (item.condition_b == "S") {
        condition = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.condition_b == "A") {
        condition = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.condition_b == "B") {
        condition = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.condition_b == "C") {
        condition = Math.floor(Math.random() * (201 - 100) + 100);
      }

      conditionValue.push(
        condition + strength + stamina + speed + moment + health
      );
    });
  }

  return conditionValue;
};

export const cpuStrength = (raceCpuData) => {
  strengthValue = [];
  if (raceCpuData != "") {
    raceCpuData.map((item) => {
      let strength = "";

      if (item.strength == "S") {
        strength = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.strength == "A") {
        strength = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.strength == "B") {
        strength = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.strength == "C") {
        strength = Math.floor(Math.random() * (201 - 100) + 100);
      }

      strengthValue.push(strength);
    });
  }

  return strengthValue;
};

export const cpuStamina = (raceCpuData) => {
  staminaValue = [];
  if (raceCpuData != "") {
    raceCpuData.map((item) => {
      let stamina = "";

      if (item.stamina == "S") {
        stamina = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.stamina == "A") {
        stamina = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.stamina == "B") {
        stamina = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.stamina == "C") {
        stamina = Math.floor(Math.random() * (201 - 100) + 100);
      }

      staminaValue.push(stamina);
    });
  }

  return staminaValue;
};

export const cpuMoment = (raceCpuData) => {
  momentValue = [];
  if (raceCpuData != "") {
    raceCpuData.map((item) => {
      let moment = "";

      if (item.moment == "S") {
        moment = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.moment == "A") {
        moment = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.moment == "B") {
        moment = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.moment == "C") {
        moment = Math.floor(Math.random() * (201 - 100) + 100);
      }

      momentValue.push(moment);
    });
  }

  return momentValue;
};

export const cpuHealth = (raceCpuData) => {
  healthValue = [];
  if (raceCpuData != "") {
    raceCpuData.map((item) => {
      let health = "";
      if (item.health == "S") {
        health = Math.floor(Math.random() * (501 - 400) + 400);
      } else if (item.health == "A") {
        health = Math.floor(Math.random() * (401 - 300) + 300);
      } else if (item.health == "B") {
        health = Math.floor(Math.random() * (301 - 200) + 200);
      } else if (item.health == "C") {
        health = Math.floor(Math.random() * (201 - 100) + 100);
      }
      healthValue.push(health);
    });
  }

  return healthValue;
};
