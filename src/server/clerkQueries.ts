import { clerkClient } from '@clerk/nextjs/server';


export async function getOrgMembers(organizationId: string) {
    const teamObj = await clerkClient.organizations.getOrganizationMembershipList({
        organizationId: organizationId
    })
    return teamObj.data
}