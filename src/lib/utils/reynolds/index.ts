// reynolds\index.ts

/*
  Re = ρ u L / μ              (eqn 1)
     = ρ u2 / (μ u / L) 
     = u L / ν                (eqn 2)                                         
 
  where:
    Re = Reynolds Number (non-dimensional)   (1)
    ρ = density (kg/m3, lb/ft3)
    u = velocity based on the actual cross section area of the duct or pipe (m/s, ft/s)
    μ = dynamic viscosity (Ns/m2, lbm/s ft)
    L = characteristic length (m, ft)
    ν = μ / ρ = kinematic viscosity (m2/s, ft2/s)

  laminar - when Re < 2300
  transient - when 2300 < Re < 4000
  turbulent - when Re > 4000
*/

// Function (1.) Reynolds number using density (p) and dynamic viscosity (mu)
// export function Re1(p, u, L, mu) {
//   const initial: number = p * u * L / mu;
//   const Re: number = Math.round(initial); // Round to n decimal places (where n==0)

//   return Re;
// };

// // Function (2.) Reynolds number using only kinematic viscosity (v)
// export function Re2(u, L, v) {
//   const initial: number = u * L / v;
//   const Re: number = Math.round(initial); // Rounded to 5 decimal places

//   return Re;
// };

/**
 * Calculates Reynolds number based on density, velocity, characteristic length, and dynamic viscosity.
 * @param density Density (kg/m3 or lb/ft3)
 * @param velocity Velocity based on the actual cross-sectional area of the duct or pipe (m/s or ft/s)
 * @param length Characteristic length (m or ft)
 * @param viscosity Dynamic viscosity (Ns/m2 or lbm/s ft)
 * @returns Reynolds number (non-dimensional)
 */
export function calculateReynoldsNumberWithDensity(density: number,
  velocity: number, length: number, viscosity: number): number {

  if (viscosity === 0) {
    throw new Error("Dynamic viscosity cannot be zero.");
  }
  const reynoldsNumber: number = density * velocity * length / viscosity;
  return Math.round(reynoldsNumber);
}

/**
* Calculates Reynolds number based on velocity, characteristic length, and kinematic viscosity.
* @param velocity Velocity based on the actual cross-sectional area of the duct or pipe (m/s or ft/s)
* @param length Characteristic length (m or ft)
* @param kinematicViscosity Kinematic viscosity (m2/s or ft2/s)
* @returns Reynolds number (non-dimensional)
*/
export function calculateReynoldsNumberWithKinematicViscosity(
  velocity: number, length: number, kinematicViscosity: number): number {

  if (kinematicViscosity === 0) {
    throw new Error("Kinematic viscosity cannot be zero.");
  }
  const reynoldsNumber: number = velocity * length / kinematicViscosity;
  return Math.round(reynoldsNumber);
}
