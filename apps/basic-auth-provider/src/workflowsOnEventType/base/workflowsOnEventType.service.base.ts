/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  WorkflowsOnEventType as PrismaWorkflowsOnEventType,
  EventType as PrismaEventType,
  Workflow as PrismaWorkflow,
} from "@prisma/client";

export class WorkflowsOnEventTypeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.WorkflowsOnEventTypeCountArgs, "select">
  ): Promise<number> {
    return this.prisma.workflowsOnEventType.count(args);
  }

  async workflowsOnEventTypes(
    args: Prisma.WorkflowsOnEventTypeFindManyArgs
  ): Promise<PrismaWorkflowsOnEventType[]> {
    return this.prisma.workflowsOnEventType.findMany(args);
  }
  async workflowsOnEventType(
    args: Prisma.WorkflowsOnEventTypeFindUniqueArgs
  ): Promise<PrismaWorkflowsOnEventType | null> {
    return this.prisma.workflowsOnEventType.findUnique(args);
  }
  async createWorkflowsOnEventType(
    args: Prisma.WorkflowsOnEventTypeCreateArgs
  ): Promise<PrismaWorkflowsOnEventType> {
    return this.prisma.workflowsOnEventType.create(args);
  }
  async updateWorkflowsOnEventType(
    args: Prisma.WorkflowsOnEventTypeUpdateArgs
  ): Promise<PrismaWorkflowsOnEventType> {
    return this.prisma.workflowsOnEventType.update(args);
  }
  async deleteWorkflowsOnEventType(
    args: Prisma.WorkflowsOnEventTypeDeleteArgs
  ): Promise<PrismaWorkflowsOnEventType> {
    return this.prisma.workflowsOnEventType.delete(args);
  }

  async getEventType(parentId: number): Promise<PrismaEventType | null> {
    return this.prisma.workflowsOnEventType
      .findUnique({
        where: { id: parentId },
      })
      .eventType();
  }

  async getWorkflow(parentId: number): Promise<PrismaWorkflow | null> {
    return this.prisma.workflowsOnEventType
      .findUnique({
        where: { id: parentId },
      })
      .workflow();
  }
}
