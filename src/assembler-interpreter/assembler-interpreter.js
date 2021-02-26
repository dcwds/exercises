function assembler(program) {
  let regs = {}
  let fns = { inc, dec, mov, jnz }
  let idx = 0

  while (idx < program.length) {
    const { name, args } = parse(program[idx])

    switch (name) {
      case "jnz":
        if (jnz(...args, regs)) idx += Number(args[1])
        else idx++
        break
      default:
        regs = fns[name](...args, regs)
        idx++
    }
  }

  return regs
}

function parse(cmd) {
  cmd = cmd.split(" ")

  return {
    name: cmd[0],
    args: cmd.slice(1, cmd.length)
  }
}

function inc(reg, regs) {
  return Object.assign(regs, { [reg]: Number(regs[reg] + 1) })
}

function dec(reg, regs) {
  return Object.assign(regs, { [reg]: Number(regs[reg] - 1) })
}

function mov(reg, val, regs) {
  return isNaN(val)
    ? Object.assign(regs, { [reg]: regs[val] })
    : Object.assign(regs, { [reg]: Number(val) })
}

function jnz(reg, _pos, regs) {
  return regs[reg] !== 0
}

module.exports = { assembler, parse, inc, dec, mov, jnz }
