function Particle(p, x, y) {
    this.p = p;
    this.pos = this.p.createVector(x, y);
    this.prev = this.p.createVector(x, y);
    // this.vel = createVector();
    this.vel = p5.Vector.random2D();
    // this.vel.setMag(random(2, 5));
    this.acc = this.p.createVector();

    this.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }
    this.show = function() {
        this.p.stroke(255, 50);
        this.p.strokeWeight(2);
        // point(this.pos.x, this.pos.y);
        // line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
        this.prev.x = this.pos.x;
        this.prev.y = this.pos.y;
    }

    this.attracted = function(target) {
        // var dir = target - this.pos
        var force = p5.Vector.sub(target, this.pos);
        var d = force.magSq();
        d = this.p.constrain(d, 0.1, 25);
        var G = 1;
        var strength = G / (d * d);
        force.setMag(strength);
        // print(d);
        if (d < 10) {
            force.mult(-10);
        }
        this.acc.add(force);
    }
}