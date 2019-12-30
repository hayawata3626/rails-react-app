export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  /** update task */
  updateTaskMutation?: Maybe<Update_TaskPayload>;
};

export type MutationUpdateTaskMutationArgs = {
  input: Update_TaskInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  /** Find a task by ID */
  task?: Maybe<Task>;
  /** Find all tasks */
  tasks?: Maybe<TaskConnection>;
};

export type QueryTaskArgs = {
  id: Scalars["Int"];
};

export type QueryTasksArgs = {
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type Task = {
  __typename?: "Task";
  description: Scalars["String"];
  id: Scalars["ID"];
  title: Scalars["String"];
};

/** The connection type for Task. */
export type TaskConnection = {
  __typename?: "TaskConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TaskEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Task>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TaskEdge = {
  __typename?: "TaskEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Task>;
};

/** Autogenerated input type of update_task */
export type Update_TaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  description: Scalars["String"];
  id: Scalars["Int"];
  title: Scalars["String"];
};

/** Autogenerated return type of update_task */
export type Update_TaskPayload = {
  __typename?: "update_taskPayload";
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars["String"]>;
  task?: Maybe<Task>;
};

export type GetTaskQueryVariables = {
  id: Scalars["Int"];
};

export type GetTaskQuery = { __typename?: "Query" } & {
  task: Maybe<
    { __typename?: "Task" } & Pick<Task, "id" | "title" | "description">
  >;
};

export type GetTasksQueryVariables = {};

export type GetTasksQuery = { __typename?: "Query" } & {
  tasks: Maybe<
    { __typename?: "TaskConnection" } & {
      nodes: Maybe<
        Array<
          Maybe<
            { __typename?: "Task" } & Pick<Task, "id" | "title" | "description">
          >
        >
      >;
    }
  >;
};
