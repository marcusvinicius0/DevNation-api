-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'RECRUITER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "post" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "presentation" TEXT,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "banner" TEXT,
    "avatar" TEXT,
    "location" TEXT,
    "linkedinURL" TEXT,
    "githubURL" TEXT,
    "defaultURL" TEXT,
    "xp" INTEGER NOT NULL DEFAULT 50,
    "isBanned" BOOLEAN NOT NULL DEFAULT false,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publications" (
    "id" TEXT NOT NULL,
    "authorID" TEXT,
    "publication" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "publications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "devProjects" (
    "id" TEXT NOT NULL,
    "authorID" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "banner" TEXT,
    "gif" TEXT,
    "link" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "devProjects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" TEXT NOT NULL,
    "devPublicationsID" TEXT,
    "authorID" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "likes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" TEXT NOT NULL,
    "authorID" TEXT,
    "publicationID" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_nickname_key" ON "users"("nickname");

-- AddForeignKey
ALTER TABLE "publications" ADD CONSTRAINT "publications_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "devProjects" ADD CONSTRAINT "devProjects_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_devPublicationsID_fkey" FOREIGN KEY ("devPublicationsID") REFERENCES "publications"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_publicationID_fkey" FOREIGN KEY ("publicationID") REFERENCES "publications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
