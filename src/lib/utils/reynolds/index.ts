// reynolds\index.ts


// Function (1.)
export function Re1(p, u, L, mu) {
  const initial = p * u * L / mu;

  // Rounded to n decimal places (n==0 currently)
  const Re = initial.toFixed(0);

  return parseInt(Re);
};

// Function (2.)
export function Re2(u, L, v) {
  // Reynolds number using eqn 2
  let initial = u * L / v;

  // Rounded to 5 decimal places
  let Re = initial.toFixed(6);

  return Re;
};

/*
  Re = ρ u L / μ              (eqn 1)
     = ρ u2 / (μ u / L) 
     = u L / ν                (eqn 2)                                         
 
  where:
    Re = Reynolds Number (non-dimensional)   (1)
    ρ = density (kg/m3, lbm/ft3)
    u = velocity based on the actual cross section area of the duct or pipe (m/s, ft/s)
    μ = dynamic viscosity (Ns/m2, lbm/s ft)
    L = characteristic length (m, ft)
    ν = μ / ρ = kinematic viscosity (m2/s, ft2/s)

  laminar - when Re < 2300
  transient - when 2300 < Re < 4000
  turbulent - when Re > 4000
*/
