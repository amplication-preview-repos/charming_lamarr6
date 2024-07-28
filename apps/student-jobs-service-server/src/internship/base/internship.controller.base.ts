/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { InternshipService } from "../internship.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { InternshipCreateInput } from "./InternshipCreateInput";
import { Internship } from "./Internship";
import { InternshipFindManyArgs } from "./InternshipFindManyArgs";
import { InternshipWhereUniqueInput } from "./InternshipWhereUniqueInput";
import { InternshipUpdateInput } from "./InternshipUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class InternshipControllerBase {
  constructor(
    protected readonly service: InternshipService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Internship })
  @nestAccessControl.UseRoles({
    resource: "Internship",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createInternship(
    @common.Body() data: InternshipCreateInput
  ): Promise<Internship> {
    return await this.service.createInternship({
      data: {
        ...data,

        employer: data.employer
          ? {
              connect: data.employer,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        location: true,
        duration: true,
        stipend: true,
        title: true,
        description: true,

        employer: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Internship] })
  @ApiNestedQuery(InternshipFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Internship",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async internships(@common.Req() request: Request): Promise<Internship[]> {
    const args = plainToClass(InternshipFindManyArgs, request.query);
    return this.service.internships({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        location: true,
        duration: true,
        stipend: true,
        title: true,
        description: true,

        employer: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Internship })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Internship",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async internship(
    @common.Param() params: InternshipWhereUniqueInput
  ): Promise<Internship | null> {
    const result = await this.service.internship({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        location: true,
        duration: true,
        stipend: true,
        title: true,
        description: true,

        employer: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Internship })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Internship",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateInternship(
    @common.Param() params: InternshipWhereUniqueInput,
    @common.Body() data: InternshipUpdateInput
  ): Promise<Internship | null> {
    try {
      return await this.service.updateInternship({
        where: params,
        data: {
          ...data,

          employer: data.employer
            ? {
                connect: data.employer,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          location: true,
          duration: true,
          stipend: true,
          title: true,
          description: true,

          employer: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Internship })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Internship",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteInternship(
    @common.Param() params: InternshipWhereUniqueInput
  ): Promise<Internship | null> {
    try {
      return await this.service.deleteInternship({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          location: true,
          duration: true,
          stipend: true,
          title: true,
          description: true,

          employer: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}