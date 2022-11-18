export interface WeekDay {
    id: number
    title: string
}

export interface Timing {
    id: number
    startsAt: string
    endsAt: string
}

export interface Subject {
    id: number
    groupNumber: number
    weekDay: WeekDay
    timing: Timing
    title: string
    auditory: string
    classroomUrl: string
    meetingUrl: string
    evenSubject: boolean
}