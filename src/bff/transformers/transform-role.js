export const transformRole = (dbRole) => ({
    id: dbRole.id,
    roleId: dbRole.role_id,
    title: dbRole.role_title,
})
