import { Injectable } from '@nestjs/common';

@Injectable()

export class MissionService{
    private readonly mission: [
    { id: 1, codename: 'OPERATION_STORM', status: 'ACTIVE' },
    { id: 2, codename: 'SILENT_SNAKE', status: 'COMPLETED' },
    { id: 3, codename: 'RED_DAWN', status: 'FAILED' },
    { id: 4, codename: 'BLACKOUT', status: 'ACTIVE' },
    { id: 5, codename: 'ECHO_FALLS', status: 'COMPLETED' },
    { id: 6, codename: 'GHOST_RIDER', status: 'COMPLETED' }
    ]

    getSummary():{ACTIVE:number; COMPLETED:number; FAILED:number}{
        const activeCount = this.mission.filter(
            (c) => c.status === 'ACTIVE'
        ).length
        const completeCount = this.mission.filter(
            (c) => c.status === 'COMPLETED'
        ).length
        const failedCount = this.mission.filter(
            (c) => c.status === 'FAILED'
        ).length

        return{
            ACTIVE:activeCount,
            COMPLETED:completeCount,
            FAILED:failedCount
        }
    }
        
    
}
