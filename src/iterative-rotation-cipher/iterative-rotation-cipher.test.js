const IterativeRotationCipher = require("./iterative-rotation-cipher")

const { encode, decode } = IterativeRotationCipher

describe("iterative-rotation-cipher", () => {
  it("encodes correctly", () => {
    expect(
      encode(
        10,
        "If you wish to make an apple pie from scratch, you must first invent the universe."
      )
    ).toEqual(
      "10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet"
    )
  })

  it("encodes correctly 2", () => {
    expect(encode(14, "True evil is a mundane bureaucracy.")).toEqual(
      "14 daue ilev is a munbune Traurecracy."
    )
  })

  it("encodes correctly 3", () => {
    expect(
      encode(
        22,
        "There is nothing more atrociously cruel than an adored child."
      )
    ).toEqual(
      "22 tareu oo iucnaTr dled oldthser.hg hiarm nhcn se rliyet oincoa"
    )
  })

  it("decodes correctly", () => {
    expect(
      decode(
        "10 hu fmo a,ys vi utie mr snehn rni tvte .ysushou teI fwea pmapi apfrok rei tnocsclet"
      )
    ).toEqual(
      "If you wish to make an apple pie from scratch, you must first invent the universe."
    )
  })

  it("decodes correctly 2", () => {
    expect(decode("14 daue ilev is a munbune Traurecracy.")).toEqual(
      "True evil is a mundane bureaucracy."
    )
  })

  it("decodes correctly 3", () => {
    expect(
      decode("22 tareu oo iucnaTr dled oldthser.hg hiarm nhcn se rliyet oincoa")
    ).toEqual("There is nothing more atrociously cruel than an adored child.")
  })
})
