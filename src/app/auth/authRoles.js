// export const authRoles = {
//     sa: ['SA'], // Only Super Admin has access
//     admin: ['SA', 'ADMIN'], // Only SA & Admin has access
//     editor: ['SA', 'ADMIN', 'EDITOR'], // Only SA & Admin & Editor has access
//     guest: ['SA', 'ADMIN', 'EDITOR', 'GUEST'], // Everyone has access
// }
export const authRoles = {
    admin: ['PM', 'ADMIN', "AL", "NP", "PT"],
    product_manager: ['PM'],
    astrologer: ['AL'],
    name_provider: ['NP'],
    pediatrician: ['PT']
}
