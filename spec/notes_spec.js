
var Compiler  = require('../compiler')
var Notes     = require('../notes')

describe('Notes', function() {

  it('should be able to process normal notes', function() {
    var chart = Compiler.compile('#00111:01020300').chart
    var notes = Notes.fromBMSChart(chart)
    expect(notes.all()).to.have.length(3)
  })

  it('should be able to process long notes', function() {
    var chart = Compiler.compile('#00151:01010202').chart
    var notes = Notes.fromBMSChart(chart)
    expect(notes.all()).to.have.length(2)
  })

  it('should assign correct column to long notes', function() {
    var chart = Compiler.compile('#00156:01010000').chart
    var notes = Notes.fromBMSChart(chart)
    expect(notes.all()).to.have.length(1)
    expect(notes.all()[0].column.column).to.equal('SC')
  })

  it('should be able to process autokeysounds', function() {
    var chart = Compiler.compile('#00101:01020300').chart
    var notes = Notes.fromBMSChart(chart)
    expect(notes.all()).to.have.length(3)
  })

})

